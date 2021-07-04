<template>
  <div>
    <!-- <b-table striped hover :items="items"></b-table> -->
    <!-- fields 속성 추가 -->
    <b-table striped hover :items="items" :fields="fields"></b-table>

  </div>
</template>

<script>
import data from '@/data'

  export default {
    data() {
      return {
        //데이터 불러오기
        items: data.Content,
        //필요한 컬럼만 불러오게 설정
        fields: [
        // ['content_id', 'title', 'created_at']
            {
                ///필드 이름 왜 안바뀌지....!?
                key: 'content_id',//실제 컬럼명
                labe: '글번호' //변경 컬럼명
            },
            {
                key: 'title',
                labe: '제목' 
            },
            {
                key: 'created_at',
                labe: '작성일'
            }
        ],

        // [
        //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
        // ]
        
      }
    }
  }
</script>