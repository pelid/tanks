class CommandsBuffer extends Array{
  constructor(){
    super()
  }
  getLatest(commandSlug){
    return _.findLast(this, {slug: commandSlug})
  }
  flush(){
    while(this.length > 0)
      this.pop()
  }
}
