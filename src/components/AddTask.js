import React, { Component } from 'react'

 class AddTask extends Component {
     state={
         title:""
     }
     onChange=(e)=>{
         this.setState(
             {
                 title:e.target.value
             }
         );
     }
     onSubmit=(e)=>{
         e.preventDefault();
         this.props.addTask(this.state.title);
         this.setState({
             title:""
         });
     }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display:"flex"}}>
                    <input type="text" placeholder="Add task here..." style={{flex:"10",paddingLeft:"10px"}} value={this.state.title} onChange={this.onChange}/>
                    <input type="submit" value="submit" style={{
                        flex:"1", 
                        display:"inline-block",
                        border:"none",
                        color:"#fff",
                        background:"#555",
                        fontSize:"15px",
                        padding:"15px 20px",
                        cursor:"pointer"}}
                    />
                </form>
            </div>
        )
    }
}

export default AddTask;