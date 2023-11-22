import PropTypes from 'prop-types'

/*
컴포넌트 타입은 가장 상단에 위치
*/
MyComponent.propTypes = {
    prop1: PropTypes.bool.isRequired,
    prop2: PropTypes.number,
    prop3: PropTypes.oneOf(['gold', 'silver', 'bronze']),
    onChange1: PropTypes.func, // 함수의 상세한 내용은 주석으로 자세한 타입 정리해주는게 좋음
    onChange2: PropTypes.func.isRequired,  // [name: string] => void
};

/*
1. 디버깅을 위해 컴포넌트 이름을 반드시 작성
2. 매개변수는 명명된 매개변수 문법으로 작성 (props.prop1, props.prop2 이런식으로 props 반복적으로 사용되어 불편함)
*/
export default function MyComponent({prop1, prop2, prop3, onChange1, onChange2}){

}

/*
1. 컴포넌트 외부의 변수와 함수는 가장 하단에 위치
2. 변수명은 대문자로 사용, 컴포넌트 코드안에서 함께 사용할 때 외부 변수라는 것을 확실히 알 수 있음
*/
const COLUMNES = [
    {id:1, name: 'phoneNumber', width:200, color: 'white'},
    {id:1, name: 'city', width:100, color: 'gray'},
]

const URL_PRODUCT_LIST = '/api/products';
function getTotalPrice({price, total}){

}