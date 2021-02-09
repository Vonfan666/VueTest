<template>
  <div class="index">
    <div class="login">
      <div class="fromLogin">
        <div class="title">
          <b>测试平台</b>
        </div>
        <div class="body">
          <el-form
            label-width="60px"
            :model="indexForm"
            :rules="rules"
             ref="indexForm"
          >
            <el-form-item label="账号" prop="phone">
              <el-input v-model="indexForm.phone" clearable placeholder="请输入工号、邮箱或手机号码"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="indexForm.password"
                show-password
                clearable
                placeholder="请输入大于6位小于18位密码"
                type="password"
              ></el-input>
              
            </el-form-item>
            <el-form-item >
              <el-switch
                v-model="indexForm.savePassWord"
                active-text="记住密码"
                active-color="red"
             
                @change="savePassWordFunc()"
              ></el-switch>
            </el-form-item>
          </el-form>
        </div>
        
        <div class="foot">
          <el-button size="medium " type="primary" @click="submitForm">登录</el-button>
        </div>
        <div class="footer">
          <el-button size="medium " type="primary">忘记密码</el-button>
          <el-button size="medium " type="primary">免费注册</el-button>
        </div>
      </div>
    </div>
    <div class="forgotPassWord">
    </div>
  </div>
</template>

<script>
import publicFunc from "@/libs/publicFunc.js";
export default {
  name: "index",
  data(){
    return {
      indexForm:{
        phone: "",
        password: "",
        savePassWord: false,
      },
      
      rules: {
        phone: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {validator:publicFunc.phoneValidate, trigger: "blur" }
        ],
        password:[{ required: true, message: "请输入密码", trigger: "blur" },
        { validator: publicFunc.passwordValidate, trigger: "blur" }]
      },
    };
  },
  methods:{
    //记住账号密码以及去掉记住账号密码
    savePassWordFunc(){
      console.log(this.indexForm.savePassWord);
      this.indexForm.savePassWord
      ?
      (publicFunc.storage.set("phone",this.indexForm.phone),
      publicFunc.storage.set("password",this.indexForm.password),
      publicFunc.storage.set("savePassWord",this.indexForm.savePassWord)
      )
      :
      (publicFunc.storage.remove("phone"),publicFunc.storage.remove("password"),publicFunc.storage.remove("savePassWord"))
    },
    //表单校验后提交接口
    submitForm(indexForm){
      this.$refs.indexForm.validate(valid => {
        if(valid){
         console.log("请求接口")
        }else{
          return false
        }
      })
    }
  },
  mounted(){
    console.log("执行mounted")
    console.log(publicFunc.storage.get("phone"))
    /* publicFunc.storage.get("savePassWord") */
    publicFunc.storage.get("savePassWord")
    ? 
    (
    this.indexForm.savePassWord = publicFunc.storage.get("savePassWord"),
    this.indexForm.phone = publicFunc.storage.get("phone"),
    this.indexForm.password = publicFunc.storage.get("password")
    )
    :null

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.index {
  overflow-x: hidden;
  min-width: 1000px;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: url("/static/image/indexImage/th01.gif");
  background-size: 100%;
  align-items: center;
  // justify-content: center;
}
.login {
  margin-top: 200px;
  margin-bottom: 20px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgb(32, 34, 39) 10px 10px 30px 10px; //边框阴影
  height: 370px;
  width: 400px;
  background: rgba(255, 255, 255, 0.8);
}
.fromLogin {
  .title {
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  .body {
    margin: 30px 30px -10px 30px;
  }
  .foot {
    text-align: center;
    button {
      width: 200px;
    }
  }
  .footer {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    button {
      margin: 0 80px;
    }
  }
}
</style>
