<template>
  <div>
    <!-- <b-table striped hover :items="items"></b-table> -->
    <!-- fields 속성 추가 -->
    <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
import data from '@/data'
  
    export default {
        data() {
            
            //sort() : 인자로 함수를 받아서 오름차순(a-b), 내림차순(b-a)
            let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
            /**
             map() : 배열내 모든함수 각각에 대해 새로운배열 반환. 1번째인자(배열각각의 아이템), 리턴값(객체), 새로운배열 속성추가
            filter() : 주어진 판별함수를 통과하는 요소를모아, 새로운 배열로 만들어 반환(ex. a가 속한요소만 가져오기)
            */
            //1. map으로 user_name속성 추가해주기
            //2. user_id의 속성은 한개뿐이니 0번쨰 인덱스로 가져옴
            items = items.map(contentItem => {return{...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})

            return {
                //데이터 불러오기
                // items: data.Content,
                items : items,
                //필요한 컬럼만 불러오게 설정
                fields: [
                // ['content_id', 'title', 'created_at']
                    {
                        key: 'content_id',//실제 컬럼명
                        label: '글번호' //변경 컬럼명
                    },
                    {
                        key: 'title',
                        label: '제목' 
                    },
                    {
                        key: 'created_at',
                        label: '작성일'
                    },
                    {
                        ///얘는 왜 또 안나올까..
                        key: 'user_name',
                        label: '글쓴이'
                    }
                ],

            // [
            //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
            // ]
            
            }
        },

        methods: {
            rowClick(item, index, e) {
                this.$router.push({
                    path: `/board/free/detail/${item.content_id}`
                })
            },
            writeContent() {
                this.$router.push({
                    path: '/board/free/create'
                })
            }
        }
    }
</script>