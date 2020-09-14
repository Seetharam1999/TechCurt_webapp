import React,{Component} from 'react';
import {Row,Col,SearchBar,Spinner,ListItem} from 'reactstrap';
import {CSSTransition} from 'react-transition-group';

class Filter extends Component{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }
    
    render()
    {
        const renderItem=(item)=>{
                return(
                   
                   <div>
                       {
                           item.map(data=>{
                               <ListItem

                               >
                                   
                               </ListItem>
                           })
                       }
                    </div>
                )
        }
        return(
            <Container>
                <Row>
                    <Col sm="12" xs="12" md={{size:6,offset:3}}>
                        <SearchBar
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Filter;