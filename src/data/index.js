export default {
    User: 
    [
        {
            user_id : 1,
            name : 'laveberry',
            created_at: '2021-07-04 10:00:01'//가입날짜
        },
        {
            user_id : 2,
            name : '수지',
            created_at: '2019-05-01 10:00:01'
        },
        {
            user_id : 3,
            name : '이도현',
            created_at: '2020-01-01 23:30:15'
        },
        {
            user_id : 4,
            name : '송강',
            created_at: '2017-06-18 17:45:08'
        },
    ],
    Content: [
        {
            content_id:1,
            user_id:1,
            title: '라부베리 강의 알림표',
            context : '아직 미정입니다',
            created_at : '2019-01-01 13:11:42',
            updated_at : null
        },
        {
            content_id:2,
            user_id:3,
            title: '글을써볼까나',
            context : '그럽시다',
            created_at : '2018-11-11 14:11:30',
            updated_at : null
        },
        {
            content_id:3,
            user_id:4,
            title: '18어게인',
            context : '재밌어',
            created_at : '2018-11-11 14:11:30',
            updated_at : null
        },
    ],
    //덧글
    Comment:[
        {
            comment_id : 1,
            user_id : 1,
            content_id : 3,
            context : '축하해요',
            created_at : '2019-03-29 11:11:14',
            updated_at: null
        },
        {
            comment_id : 2,
            user_id : 3,
            content_id : 3,
            context : '두번째 덧글',
            created_at : '2018-03-29 11:11:14',
            updated_at: null
        },
        {
            comment_id : 3,
            user_id : 2,
            content_id : 1,
            context : '미래에서온 덧글',
            created_at : '2023-03-29 11:11:14',
            updated_at: null
        },
    ],
    SubComment:[
        {
            subcomment_id:1,
            comment_id:3,
            user_id:1,
            context: '오 직접 댓글을 달아주시다니 영광입니다!ㅠㅠ',
            created_at: '2023-03-29 11:11:14',
            updated_at: null
        }
    ]
}