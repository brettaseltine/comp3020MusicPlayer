function setup() {

    // update song
    window.addEventListener('message', function (e) {
        // Get the sent data
        const data = e.data;
        const decoded = JSON.parse(data);
        const trackList = decoded['tracks'];
        const trackIdx = decoded['trackIdx'];

        // perform updates
        document.getElementById("title").innerText = trackList[trackIdx].title;
        document.getElementById("artist").innerText = trackList[trackIdx].artist;
        document.getElementById("cover").src = trackList[trackIdx].imageDifPath;
    });
}