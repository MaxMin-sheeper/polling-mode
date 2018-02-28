/**
 * 轮询函数
 * @param callback:轮询的执行函数
 * @param time:轮询时间 default：5000
 */

 class POLLINGMODE {
     constructor(){
         this.setTimeout = null;
     }

     beginPolling(callback, time=5000){
        let callfunc = () => {};

        if(callback){
            callfunc = callback;
        }

        const processor = () => {
            this.setTimeOut = setTimeout(() => {
                callfunc();
                processor();
              }, time);
        };
        
        processor();
     }

     stopPolling(){
         clearTimeout(this.setTimeout);
     }
 }

 const pollingMode = new POLLINGMODE();

 export default pollingMode;