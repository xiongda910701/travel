
import axios from 'axios';
export default{
  doAxiosPost:function(url,params,callback_success){
    axios.post(url, params)
      .then(function (response) {
        var status=response.status;
        var ret=response.data.ret;
        var data=response.data.data;
        if(status==200&&ret==true){
          callback_success(data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  doAxiosGet:function(url,params,callback_success){
    axios.get(url, {
        params: params
      })
      .then(function (response) {
        var status=response.status;
        var ret=response.data.ret;
        var data=response.data.data;
        if(status==200&&ret==true){
          callback_success(data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}




