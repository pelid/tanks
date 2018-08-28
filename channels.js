class Channel{
  // Handy Channel abstraction over Promise object for using with await in infinite loop.

  constructor(sourceSubscribe){
    this.push() // first initial push

    if (sourceSubscribe){
      let onEvent = (data)=>{
        this.push(data)
        sourceSubscribe(onEvent)
      }
      sourceSubscribe(onEvent)
    }

  }

  push(message){
    if (this.promise){
      this._resolve(message)
    }
    this.promise = new Promise((resolve, reject)=>{
      this._resolve=resolve
    })
  }
}
