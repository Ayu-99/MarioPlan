import React from 'react'

const  ProjectDetails=(props)=> {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth=0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>dfksfhfkhsdkshkjsdhfhdkfjk</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>
                        Posted by Net Ninja
                    </div>
                    <div>2nd sept, 2a.m</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;