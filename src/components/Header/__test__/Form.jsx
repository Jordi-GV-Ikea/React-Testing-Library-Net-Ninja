const Form = () => (
  <form action="getform.php" method="get">
    <label>
      First name: <input type="text" id="firstID" />
    </label>
    <br />
    <label>
      Last name: <input type="text" />
    </label>
    <br />
    <label htmlFor="adress">adress:</label>
    <input type="text" id="adress" name="adress" />
    <br />
    <label>
      E-mail: <input type="email" />
    </label>
    <br />
    <input type="submit" htmlFor="sub" value="Submit" />
  </form>
);
export default Form;
