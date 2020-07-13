export const nativeShareIt = (title, description, url) => {
  if (navigator.share) {
    const postToShare = {
      title: title,
      text: description,
      url: url,
    }
    navigator.share(postToShare)
  }
}
