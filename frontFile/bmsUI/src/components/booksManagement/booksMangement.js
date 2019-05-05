import Sreach from '@components/common/sreach/sreach.vue'
import Table from '@components/common/table/table.vue'

export default {
    components : {Sreach,Table},
    data() {
        return {
            imageUrl: '',//图片上传
            dialogFormVisible: false,//模态框开关
            ruleForm: {
                name: '', //名称
                category: '',//类别
                desc: '',//描述
                publishingHouse : '',//出版社
                number : 0,//数量
                img : ''
              },
              rules: {
                name: [
                  { required: true, message: '请输入图书名字', trigger: 'blur' },
                  { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                ],
                category: [
                  { required: true, message: '请选择书籍类别', trigger: 'change' }
                ],
                publishingHouse: [
                  { required: true, message: '请输入出版社信息', trigger: 'blur' }
                ],
                number: [
                  { required: true, message: '数量不能为空', trigger: 'blur' },
                  { type: 'number', message: '年龄必须为数字值'}
                ],
                desc: [
                  { required: true, message: '请填写活动形式', trigger: 'blur' }
                ],
                img: [
                  { required: true, message: '请上传一张书籍图片', trigger: 'blur' }
                ]
        
            }
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },

          
          submitForm(formName) {//提交表单
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {//重置
            this.$refs[formName].resetFields();
          },
          //上传图片
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPng = file.type === 'image/png';
            console.log(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2;
    
            if (!(isJPG&&isPng)) {
              this.$message.error('上传头像图片只能是 JPG和 PNG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          }
          //上传图片结束
    },
}