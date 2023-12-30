import './raise.css'
function Raise() {
  return (
      <div className="raise">
          <div className="raise-container">
            <h2>Raise Money</h2>
            <p>Fill out the form below to start raising money for someone&apos;s future!</p>
            <form>
                <div className="input-group">
                    <input className="input-form" type="email" required=""/>
                    <label>Email</label>
                </div>
                <div className="input-group">
                    <input className="input-form" type="password" required="" />
                    <label>Password</label>
                </div>
                <div className="input-group">
                    <input className="input-form" type="text" required=""/>
                    <label>First Name</label>
                </div>
                <div className="input-group">
                    <input className="input-form" type="text" required=""/>
                    <label>Last Name</label>
                </div>
                <div className="input-group">
                    <input className="input-form" type="text" required=""/>
                    <label>Phone Number</label>
                </div>
                <textarea id="description" name="description" className='textarea-raise' placeholder='Describe you emergency here.' required></textarea>
                <br />
                <input type="file" className="input-file" id="myFile" name="filename" />
                <br/>
                <button type="submit" className='button-raised' value="Submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Raise