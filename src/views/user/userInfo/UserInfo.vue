<template>
    <div class="user-info">
        <div class="top-info">
            <div class="info">
                <div class="left-info">
                    <img :src="userInfo.user_img" alt="">
                    <div class="user-name">{{userInfo.name}}</div>
                    <div class="leavr">{{userInfo.gender}}</div>
                </div>
                <div class="vip-center">会员中心
                    <van-icon name="arrow"/>
                </div>
            </div>
        </div>
        <div class="edit-info">
            <div class="my-info">我的资料</div>
            <div class="my-info-num">
                <div>
                    <van-icon name="manager-o"/>
                    <span> 粉丝</span>
                    <p>12</p></div>
                <div>
                    <van-icon name="good-job-o"/>
                    <span> 获赞</span>
                    <p>12</p></div>
                <div>
                    <van-icon name="like-o"/>
                    <span> 关注</span>
                    <p>12</p></div>
            </div>
        </div>
        <div class="desc">
            个人描述：
            {{userInfo.user_desc}}
        </div>
    </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "UserInfo",
    mounted() {
      this.getInfo()
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapActions(['getUserInfo']),
      async getInfo() {
        await this.getUserInfo()
      }
    }
  }
</script>

<style lang="less" scoped>
    .user-info {
        background: #F6F6F6;
        .top-info {
            width: 100%;
            height: 130px;
            background: linear-gradient(135deg, rgba(255, 139, 1, 1) 0%, rgba(254, 80, 2, 1) 100%);
            .info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 10px;
                .left-info {
                    display: flex;
                    align-items: center;
                }
                img {
                    width: 55px;
                    height: 55px;
                    vertical-align: middle;
                }
                .user-name {
                    width: 60px;
                    height: 28px;
                    font-size: 20px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 1);
                    line-height: 28px;
                    margin: 0 19px 0 11px;
                }
                .leavr {
                    width: 61.5px;
                    height: 19px;
                    background: rgba(0, 0, 0, 1);
                    border-radius: 9.5px;
                    opacity: 0.16;
                    margin-top: 8.5px;
                    font-size: 10px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                }
                .vip-center {
                    margin-top: 8.5px;
                    width: 75px;
                    height: 19px;
                    background: rgba(0, 0, 0, 1);
                    border-radius: 9.5px;
                    opacity: 0.16;
                    font-size: 10px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 19px;
                }
            }
        }
        .edit-info {
            width: 90%;
            height: 115px;
            background: rgba(255, 255, 255, 1);
            border-radius: 5px;
            margin: -45px auto;
            .my-info {
                height: 45px;
                border-bottom: 2px solid #ECECEC;
                font-size: 15px;
                font-weight: 600;
                color: rgba(51, 51, 51, 1);
                line-height: 45px;
                padding: 0 10px;
                text-align: left;
            }
            .my-info-num {
                display: flex;
                font-size: 13px;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                p {
                    font-size: 18px;
                    margin-top: 5px;
                }
            }
        }
        .desc{
            margin-top: 65px;
            padding-bottom: 100px;
            text-align: left;
            padding-left: 5%;
        }
    }
</style>