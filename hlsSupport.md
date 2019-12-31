# HLS documentation
``` import Hls from 'hls.js'```

``` 
componentDidMount()
{
    var hls=new Hls()
} 

```

## Important methods
* Hls.isSupported() : To check if the browser supports hls 
* hls.attachMedia(video) : Attach video dom element to hls object
* hls.on(event_type,callback) : listens for events and fires actions
 

## Events
* Events.MEDIA_ATTACHED
* Events.MANIFEST_PARSED
* Events.

## Parameters

```
var config={}
var hls=new Hls(config)
```

* startPosition[default=-1] - start position for video
* debug[default=false] -inbuilt debugger of hls
* autoStartLoad[default=true] - start level playlist and fragments loaded
    else manually make APi call hls.startLoad(-1)//-1 is startPosition
* defaultAudioCodec[default=undefined]
* maxStarvationDelay[default=4s] - hls will adjust quality to a value, if loading a fragment is expected to be higher than maxStarvationDelay



