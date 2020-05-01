class Visibility extends React.Component {
    
    constructor(props) {
        super(props)

        this.toggleVisibility = this.toggleVisibility.bind(this)

        this.state = {
            visibility: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>

                {this.state.visibility && (
                    <p>This is some info.</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))




// console.log('app is running')
// const appRoot = document.getElementById('app')

// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility

//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={toggleVisibility}>
//                 {visibility ? "Hide Details" : "Show Details"}
//             </button>

//             {visibility && (
//                 <p>This is some info</p>
//             )}
        
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render()
