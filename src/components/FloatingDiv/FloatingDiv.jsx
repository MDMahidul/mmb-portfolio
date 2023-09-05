import './FloatingDiv.css'

const FloatingDiv = ({img,text1,text2}) => {
    return (
        <div className='floatingDiv'>
            <img src={img} alt="" />
            <span className='font-semibold text-xl'>{text1}<br/>{text2}</span>            
        </div>
    );
};

export default FloatingDiv;