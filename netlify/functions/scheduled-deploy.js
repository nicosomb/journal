/**
 * Scheduled function to trigger a Netlify build every hour
 * This function uses Netlify's scheduled functions feature
 * 
 * To configure:
 * 1. Create a build hook in Netlify dashboard: Site settings > Build & deploy > Build hooks
 * 2. Add the build hook URL as NETLIFY_BUILD_HOOK environment variable in Netlify
 * 3. The function will be called automatically every hour
 */
const https = require('https');
const { URL } = require('url');

exports.handler = async (event, context) => {
  // Get the build hook URL from environment variables
  const buildHook = process.env.NETLIFY_BUILD_HOOK;
  
  if (!buildHook) {
    console.error('NETLIFY_BUILD_HOOK environment variable is not set');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Build hook not configured' })
    };
  }

  try {
    // Trigger a build by calling the build hook
    const buildHookUrl = new URL(buildHook);
    
    const result = await new Promise((resolve, reject) => {
      const options = {
        hostname: buildHookUrl.hostname,
        port: buildHookUrl.port || 443,
        path: buildHookUrl.pathname + buildHookUrl.search,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const req = https.request(options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ statusCode: res.statusCode, data });
          } else {
            reject(new Error(`Build hook returned ${res.statusCode}: ${res.statusMessage}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.end();
    });

    console.log('Build triggered successfully at', new Date().toISOString());
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Build triggered successfully',
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error triggering build:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to trigger build',
        message: error.message
      })
    };
  }
};

// Schedule: run every hour (cron format: minute hour day month weekday)
exports.schedule = '0 * * * *';
