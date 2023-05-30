import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Dragon Set',
          img: 'drag.jpg',
          desc: 'Futomaki philadelphia , Salmon tartare futomaki , California surimi and tobiko , California halibut in tempura',
          category: 'rollPmaki',
          price: '30.00',
        },
        {
          id: 2,
          title: 'Katana Set',
          img: 'KATANA-SET-scaled.jpg',
          desc: 'Philadelphia with eel,Philadelphia Classic, sunrise roll , noodles with salmon, California maki gold salmon  ',
          category: 'roll',
          price: '50.00',
        },
        {
          id: 3,
          title: 'Happy Set',
          img: 'makiPFin.jpg',
          desc: 'maki with salmon ,maki with avocado, Philadelphia classic, maki with cucumber',
          category: 'rollPmaki',
          price: '15.00',
        },
        {
          id: 4,
          title: 'Dragon Heart  set',
          img: 'set-1-scaled.jpg',
          desc: 'Red dragon , maki with tuna  , California spicy tuna',
          category: 'rollPmaki',
          price: '20.00',
        },
        {
          id: 5,
          title: 'Tempura Set ',
          img: 'Set-Tempura38.webp',
          desc: 'Sake Futo , Sake Futo Ten, Ebi Futo Ten , California Roll with Eel and Shrimp , California Roll with Salmon and Shrimp , Kappa maki , Sake maki  ',
          category: 'rollPmaki',
          price: '70.00',
        },
        {
          id: 6,
          title: 'lamp',
          img: 'start-set.jpg',
          desc: 'Pasta California , Tempura Ebi California , Hot Salmon Futo, Double Futo , Tekka Maki , Sake Maki ',
          category: 'rollPmaki',
          price: '60.00',
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
  addToOrder(item) {
    let isInArray
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
}

export default App;
