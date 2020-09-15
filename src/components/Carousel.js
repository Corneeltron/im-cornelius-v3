import React from "react";

import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import spearmintscrn from "../assets/images/spearmintscrn.png";
import sproutlyscrn from "../assets/images/sproutlyscrn.png";
import uprootscrn from "../assets/images/uprootscrn.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 0,
          title: "SpearmintJS",
          subTitle: "Create tests, zero code required.",
          imgSrc: spearmintscrn,
          link: "https://www.spearmintjs.com",
          selected: false,
        },
        {
          id: 1,
          title: "Uproot",
          subTitle: "Find out how your representatives vote.",
          imgSrc: sproutlyscrn,
          link: "https://www.uproot.com",
          selected: false,
        },
        {
          id: 2,
          title: "AgotaHomes",
          subTitle: "Resource hub for LA's homeless.",
          imgSrc: uprootscrn,
          link: "https://www.agotahomes.com",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
