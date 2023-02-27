import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        visibility: state.visibility
    }
}

function mapDispatchToProps(dispatch){
    return {
        Check: () =>{
            let action = {type: ''}
            if(document.querySelector('#form4Example4').checked){
                action = {type: 'CHECKED'};
                dispatch(action);
            }else{
                action = {type: 'UNCHECKED'};
                dispatch(action);
            }
        }
    }
}
function Form(props) {
    return (
        <form className=" m-3 bg-danger rounded-3 text-white mb-3">

            <div className="form-outline mb-4">

                <label className="form-label" htmlFor="form4Example1">Нажимая на согласие вы подтверждаете своё участие в ZXC замесе на сфах 1 на 1</label>
            </div>


            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox"  id="form4Example4" onChange={props.Check}/>
                <label className="form-check-label" htmlFor="form4Example4">
                    Я согласен жёстко зарубиться
                </label>
            </div>
            {props.visibility &&
            <a type="button" href="https://tenor.com/ru/view/shadow-fiend-dota2-gif-25042778" className="btn btn-warning btn-block mb-4">ПОГНАЛИ</a>}
        </form>
    );
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);