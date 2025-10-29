// Get query parameter from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Default MP4 URL if no ?file= provided
const defaultUrl = "http://103.145.232.246/Data/movies/Bollywood/2025/Ek%20Deewane%20Ki%20Deewaniyat%20(2025)/Ek%20Deewane%20Ki%20Deewaniyat.mp4";

// If ?file= available use it, otherwise use default
const streamUrl = getQueryParam("file") || defaultUrl;

// ✅ Setup JWPlayer (auto-detects mp4/hls)
jwplayer("jwplayerDiv").setup({
  file: streamUrl,
  width: "100%",
  height: "100%",
  aspectratio: "16:9",
  autostart: true,
  mute: false,
  preload: "auto",
  type: streamUrl.endsWith(".mp4") ? "mp4" : "hls",
  cast: { appid: "CC1AD845" }
});
