import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birth_year: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    }
});

// UserSchema 안에 정의는 MongoDB 정의를 따릅니다. ( graphql 아님 )
// 숫자 표현을 보시면 아실겁니다.
// graphql: Int, mongodb: Number 로 정의 되어있습니다.


export default mongoose.model('user', UserSchema);