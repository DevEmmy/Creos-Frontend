export const extractMp4DownloadLink1 = (youtubeUrl)=> {
    // Extract the video ID from the YouTube URL
    const videoId = youtubeUrl.match(/(?<=v=|\/v\/|embed\/|youtu.be\/|\/embed\/|\/v=|\/e\/|watch\?v=|&v=|%2Fvideos%2F|embed%\u200C\u200B2F|youtu.be%2F|v%2F|e%2F|watch\?v%3D|&v%3D)([^#\&\?\/\s]{11})(?!\S*['"]\s*\/?>)/);
    
    if (!videoId) {
      console.error('Invalid YouTube URL');
      return null;
    }
    
    // Construct the MP4 download link
    const downloadLink = `https://www.youtube.com/watch?v=${videoId[0]}&dl=1`;
    
    return downloadLink;
  }


  export async function extractMp4DownloadLink(youtubeUrl) {
    const videoId = extractVideoId(youtubeUrl);
  
    if (!videoId) {
      console.error('Invalid YouTube URL');
      return null;
    }
  
    const apiEndpoint = `https://www.youtube.com/get_video_info?video_id=${videoId}`;
  
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.text();
  
      const parsedData = parseQueryString(data);
  
      if (parsedData.status === 'fail') {
        console.error('Failed to retrieve video information');
        return null;
      }
  
      const streams = parseStreamMap(parsedData.url_encoded_fmt_stream_map);
      
      if (!streams) {
        console.error('No streams found');
        return null;
      }
  
      const mp4Stream = streams.find(stream => stream.type.includes('video/mp4'));
      
      if (!mp4Stream) {
        console.error('No MP4 stream found');
        return null;
      }
  
      return mp4Stream.url;
    } catch (error) {
      console.error('Error occurred during API request:', error);
      return null;
    }
  }
  
  function extractVideoId(url) {
    const videoIdRegex = /[?&]v=([^?&]+)/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  }
  
  function parseQueryString(queryString) {
    const pairs = queryString.slice(1).split('&');
    const result = {};
  
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      result[key] = decodeURIComponent(value || '');
    }
  
    return result;
  }
  
  function parseStreamMap(streamMap) {
    const streams = streamMap.split(',');
    const result = [];
  
    for (const stream of streams) {
      const streamData = parseQueryString(stream);
      
      if (streamData.type && streamData.url) {
        result.push(streamData);
      }
    }
  
    return result;
  }
  