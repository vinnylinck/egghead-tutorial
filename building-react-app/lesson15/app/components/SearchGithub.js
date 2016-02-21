import React from 'react';

class SearchGithub extends React.Component {
    getRef(ref) {
        this.usernameRef = ref;
    }
    handleSubmit(){
        const username = this.usernameRef.value;
        this.usernameRef.value = '';

        //this.history.pushState(null, "profile/" + username); --- v1.0
        //Router.hashHistory.push("profile/" + username); //--- v2.0
        //Router.hashHistory.push("/profile/" + username); //--- no refresh
        this.props.history.push("/profile/" + username); //--- no mixin
    }
    render() {
        return(
            <div className="col-sm-12">
                <form onSubmit={() => this.handleSubmit()}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchGithub
