const Parser = require('rss-parser');
const parser = new Parser({
  customFields: {
    item: ['content:encoded']
  }
});

module.exports = async function() {
  try {
    const feed = await parser.parseURL('https://instantanes.loeuillet.org/feeds/posts.xml');
    
    if (!feed || !feed.items) {
      console.warn('Aucun flux RSS trouvé pour les photos');
      return [];
    }
    
    const photos = feed.items
      .slice(0, 6)
      .map(item => {
        const content = item.content || item['content:encoded'] || item.contentSnippet || '';
        const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
        const imageUrl = imgMatch ? imgMatch[1] : null;
        
        return {
          title: item.title || '',
          url: item.link || '',
          imageUrl: imageUrl,
          date: item.pubDate || item.isoDate || ''
        };
      })
      .filter(photo => photo.imageUrl);
    
    return photos;
  } catch (error) {
    console.error('Erreur lors de la récupération du flux RSS:', error.message);
    return [];
  }
};
