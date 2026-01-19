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
    
    // Extraire les 6 dernières photos
    const photos = feed.items
      .slice(0, 6)
      .map(item => {
        // Extraire l'image depuis le contenu HTML
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
      .filter(photo => photo.imageUrl); // Filtrer les items sans image
    
    return photos;
  } catch (error) {
    console.error('Erreur lors de la récupération du flux RSS:', error.message);
    return [];
  }
};
