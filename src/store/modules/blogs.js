

const state = {
    blogs: [
        {
            id: 1,
            title: 'Matthew',
            description:'Roberts',
        },
        {
            id: 2,
            title: 'Matthew',
            description:'Roberts',
        },
        {
            id: 3,
            title: 'Matthew',
            description:'Roberts',
        },
        {
            id: 4,
            title: 'Matthew',
            description:'Roberts',
        },
        

        
        

    ]
};

const getters = {
    allBlogs: (state) => state.blogs,
   
};

const actions = {
};

const mutations = {

    
};

export default {
    state,
    getters,
    actions,
    mutations,
}