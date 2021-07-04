<template>
    <div>
        <b-input placeholder="제목을 입력해주세요."></b-input>
        <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="내용을 입력해 주세요"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
        <b-button @click="uploadContent">저장</b-button>
        <b-button @click="cancel">취소</b-button>
    </div>
</template>

<script>
import data from '@/data'

export default {

    name : 'Create',

    data(){
        return{
            subject: '',
            context: '',
            userId: 1,
            createdAt: '2021-07-05 06:21:30',
            updatedAt: null,
            updateObject: null,
            updateMode: this.$route.params.contentId > 0 ? true : false //수정모드 구분
        }
    },
    created(){
        if(this.$route.params.contentId > 0){
            const contentId = Number(this.$route.params.contentId)
            this.updateObject = data.Content.filter(item => item.content_id === contentId)[0] //배열의 첫번째요소
            this.subject = this.updateObject.title;
            this.context = this.updateObject.context;
        }
    },
    methods:{
        cancel(){
            this.$router.push({
                path: '/board/free/'
            })
        },
        uploadContent(){
            //글 번호증가위한 선언
            let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
            const content_id = items[0].content_id + 1

            data.Content.push({
                content_id: content_id,
                user_id: this.user_id,
                title: this.title,
                context : this.context,
                created_at : this.createdAt,
                updated_at : null
            })

            this.$router.push({
                path: '/board/free/'
            })
        },
        updateContext(){
            
        }
    }
}
</script>