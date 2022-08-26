class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0" };

    this.handleClick = this.handleClick.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleClick(e) {
    var val = e.target.value.toString();
    var disp = this.state.display.toString();
    switch (val) {
      case "0":
        if (disp == "0") {
        } else {
          this.setState({
            display: disp + val });

        }
        break;
      case ".":
        if (disp[disp.length - 1] == ".") {
        } else {
          this.setState({
            display: disp + val });

        }

        break;

      default:
        if (disp == "0") {
          this.setState({
            display: val });

        } else {
          this.setState({
            display: disp + val });

        }}

  }

  evaluate() {
    function calc(str) {
      return Function("return (" + str + ")")();
    }

    if (/\-\d/.test(this.state.display)) {
      this.setState(state => ({
        display: calc(state.display) }));

    } else {
      this.setState(state => ({
        display: calc(
        state.display.replace(/([\+\-\*\/])*([\+\-\*\/])(\d)/, "$2$3")) }));


    }
  }

  clear() {
    this.setState({
      display: 0 });

  }

  componentDidUpdate() {
    if (/(\.)(\d*)(\.)/g.test(this.state.display)) {
      this.setState({
        display: this.state.display.replace(/(\.)(\d*)(\.)/g, "$1$2") });

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "panel", className: "container panel" }, /*#__PURE__*/
      React.createElement("div", { id: "top", className: "row top" }, /*#__PURE__*/
      React.createElement("p", { id: "left", className: "" }, "NOT CASIO"), /*#__PURE__*/


      React.createElement("p", { id: "right", className: "right" }, "\u0192(x) = x\xB2")), /*#__PURE__*/




      React.createElement("div", { id: "display", className: "display font-digital-numbers" },
      this.state.display), /*#__PURE__*/


      React.createElement("div", { id: "buttons", className: "container buttons" }, /*#__PURE__*/
      React.createElement("div", { id: "rowtop", className: "row justify-content-between" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", className: "button-large", onClick: this.clear }, "AC"), /*#__PURE__*/


      React.createElement("button", {
        id: "equals",
        className: "button-large",
        onClick: this.evaluate }, "=")), /*#__PURE__*/




      React.createElement("div", { id: "row1", className: "row justify-content-between" }, /*#__PURE__*/
      React.createElement("button", {
        id: "one",
        className: "button-normal",
        onClick: this.handleClick,
        value: "1" }, "1"), /*#__PURE__*/



      React.createElement("button", {
        id: "two",
        className: "button-normal",
        onClick: this.handleClick,
        value: "2" }, "2"), /*#__PURE__*/



      React.createElement("button", {
        id: "three",
        className: "button-normal",
        onClick: this.handleClick,
        value: "3" }, "3"), /*#__PURE__*/



      React.createElement("button", {
        id: "add",
        className: "button-normal",
        onClick: this.handleClick,
        value: "+" }, "+")), /*#__PURE__*/




      React.createElement("div", { id: "row2", className: "row justify-content-between" }, /*#__PURE__*/
      React.createElement("button", {
        id: "four",
        className: "button-normal",
        onClick: this.handleClick,
        value: "4" }, "4"), /*#__PURE__*/



      React.createElement("button", {
        id: "five",
        className: "button-normal",
        onClick: this.handleClick,
        value: "5" }, "5"), /*#__PURE__*/



      React.createElement("button", {
        id: "six",
        className: "button-normal",
        onClick: this.handleClick,
        value: "6" }, "6"), /*#__PURE__*/



      React.createElement("button", {
        id: "subtract",
        className: "button-normal",
        onClick: this.handleClick,
        value: "-" }, "-")), /*#__PURE__*/




      React.createElement("div", { id: "row3", className: "row justify-content-between" }, /*#__PURE__*/
      React.createElement("button", {
        id: "seven",
        className: "button-normal",
        onClick: this.handleClick,
        value: "7" }, "7"), /*#__PURE__*/



      React.createElement("button", {
        id: "eight",
        className: "button-normal",
        onClick: this.handleClick,
        value: "8" }, "8"), /*#__PURE__*/



      React.createElement("button", {
        id: "nine",
        className: "button-normal",
        onClick: this.handleClick,
        value: "9" }, "9"), /*#__PURE__*/



      React.createElement("button", {
        id: "multiply",
        className: "button-normal",
        onClick: this.handleClick,
        value: "*" }, "*")), /*#__PURE__*/




      React.createElement("div", { id: "row4", className: "row justify-content-between" }, /*#__PURE__*/
      React.createElement("button", {
        id: "zero",
        className: "button-large",
        onClick: this.handleClick,
        value: "0" }, "0"), /*#__PURE__*/



      React.createElement("button", {
        id: "decimal",
        className: "button-normal",
        onClick: this.handleClick,
        value: "." }, "."), /*#__PURE__*/



      React.createElement("button", {
        id: "divide",
        className: "button-normal",
        onClick: this.handleClick,
        value: "/" }, "/")))));







  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Display, null), document.getElementById("body"));