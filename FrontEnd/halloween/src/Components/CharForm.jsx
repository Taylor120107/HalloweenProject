function CharForm(){

    return (
        <form>
        <body>
          <h1> Please add to my list of Halloween Characters!</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rczqTTvGhQWwKDBvgR3_Rx6ldEdvHRMOEEdibHNesCw4NUrZo8_HtZO72JPmtSsV5-A&usqp=CAU"></img>
          <br></br>
          <br></br>
          <label htmlFor="Name">Character Name:</label>
          <input type="text" id="Name" name="Name"></input>
          <br></br>
          <label htmlFor="Movie">Movie They were in:</label>
          <input type="text" id="Movie" name="Movie"></input>
          <br></br>
          <label htmlFor="Scare">Scare Factor:</label>
          <input type="number" id="Scare" name="Scare"></input>
          <br></br>
          <br></br>
          <input type="submit" value="Submit"></input>
        </body>
      </form>
    )
}

export default CharForm;