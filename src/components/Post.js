import React , { Component } from 'react';
import PDF from './PDF';

class Post extends Component {
    state = {
        Name: '',
        content: '',
        email: '',
        number: '',
        date: '',
        

        postSubmitted: false

        
    }
    
    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    submitPost = (e) => {
        if(!this.state.name  || !this.state.content){
            alert('All Fields are Required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }
    render(){
        return(
            <>

            {  !this.state.postSubmitted ? 
            (<div className='container'>
                <div className='jumbotron mt-3'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='well well-sm'>
                                <form className='from-horizontal' method='post'>
                                    <fieldset>
                                        <legend className='text-center header mt-3'>
                                            Add new query
                                        </legend>
                                       <div className='form-group my-4'>
                                        < span className='col-md-1 col-md-offset-2 text-center'><i className='fa fa-user bigicon'></i></span>
                                        <input onChange={this.onChange('name')} name='name' type='text' placeholder='Enter your name..' className='form-control'/>
                                        </div> 
                                        <div className='form-group my-4'>
                                        < span className='col-md-1 col-md-offset-2 text-center'><i className='fa fa-user bigicon'></i></span>
                                        <input onChange={this.onChange('email')} name='email' type='text' placeholder='Enter your email..' className='form-control'/>
                                        </div>
                                        <div className='form-group my-4'>
                                        < span className='col-md-1 col-md-offset-2 text-center'><i className='fa fa-user bigicon'></i></span>
                                        <input onChange={this.onChange('number')}  type='number' placeholder='Enter your no..' className='form-control'/>
                                        </div> 
                                        <div className='form-group my-4'>
                                        < span className='col-md-1 col-md-offset-2 text-center'><i className='fa fa-user bigicon'></i></span>
                                        <input onChange={this.onChange('date')}  type='date' placeholder='Enter your date of birth..' className='form-control'/>
                                        </div>
                                        <div className='form-group my-4'>
                                        < span className='col-md-1 col-md-offset-2 text-center'><i className='fa fa-pencil-square-o bigicon'></i></span>
                                        <textarea onChange={this.onChange('content')} name='content' type='text' placeholder='Enter your issue here' className='form-control' rows='7'></textarea>
                                        </div>
                                        <div className='form-group my-3'>
                                        <button onClick={this.submitPost} type='button' className='btn btn-primary btn-lg'>Submit</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : (
                <PDF name={this.state.name} content={this.state.content} email={this.state.email} number={this.state.number} date={this.state.date} />
            )
    }
            </>
        );
    }
}

export default Post;