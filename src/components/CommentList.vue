<template>
    <div>
        <div :key="item.comment_id" v-for="item in comments">
            <!-- <div>{{item.context}}</div> -->
            <CommentListItem :commentObj="item" />
        </div>
        <!-- 내 댓글작성 -->
        <CommentCreate :contentId="contentId"  :reloadComments="reloadComments" />
    </div>
</template>

<script>
import data from '@/data'
import CommentListItem from './CommentListItem';
import CommentCreate from './CommentCreate';

export default {
    name : 'CommentList',
    //부모가 넘겨준 props 자식컴포넌트에서 사용하기
    props:{
        contentId: Number,
    },
    components:{
        CommentListItem,
        CommentCreate,
    },

    data(){
        return {
            comments : data.Comment.filter(item => item.content_id === this.contentId)
        }
    },
    methods:{
        reloadComments(){
            this.comments = data.Comment.filter(item => item.content_id === this.contentId)
        },
        
    }
};
</script>