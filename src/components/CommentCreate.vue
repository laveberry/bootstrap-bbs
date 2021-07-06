<template>
  <div class="comment-create">
    <b-input-group :prepend="name" class="mt-3">
      <b-form-textarea
        id="textarea"
        v-model="context"
        :placeholder="isSubComment ? '덧글에 덧글을 달아주세요~!' : '코멘트를 달아주세요~!'"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-input-group-append>
        <b-button variant="info" @click="isSubComment ? createSubComment() : createComment()">작성하기</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import data from '@/data'

export default {
    name : 'CommentCreate',
    //넘어온 props 형태정의
    props:{
        contentId : Number,
        commentId : Number,
        isSubComment: Boolean,
        reloadComments : Function,
        reloadSubComments : Function,
        subCommentToggle : Function,
    },
    data(){
        return{
            name: '달해',
            context: '', //덧글내용
        };
    },
    methods:{
        createComment(){
            data.Comment.push({
               comment_id : data.Comment[data.Comment.length -1].comment_id + 1, //기존마지막댓글 +1
                user_id : 1,
                content_id : this.contentId, //게시물 아이디 props로
                context : this.context,
                created_at : '2018-03-29 11:11:14',
                updated_at: null
            });
            this.reloadComments();
            this.context = '';
        },
        createSubComment(){
            data.SubComment.push({
                subcomment_id : data.SubComment[data.SubComment.length -1].subcomment_id + 1,
                user_id : 1,
                comment_id : this.commentId, //게시물 아이디 props로
                context : this.context,
                created_at : '2020-12-24 12:25:44',
                updated_at: null
            });
            this.reloadSubComments(); //대댓글 reload
            this.subCommentToggle(); //input닫아주기
            this.context = '';
        }
    }
};
</script>

<style scoped>
.comment-create {
  display: flex;
  margin-bottom: 1em;
}
</style>