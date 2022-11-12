import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Card, Col, Figure, Image, ListGroup, Row } from "react-bootstrap"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faCheck, faCheckDouble, faHouse } from "@fortawesome/free-solid-svg-icons"

const ChatFriendsList = () => {
    const friends = [
      {
        username: 'tjfv02',
        name: 'Tito Fajardo',
        profilePhoto: require('../../assets/FriendsChatList/pp.jpg'),
        lastMessage: 'Cenamos hoy a las 10??',
        lastMessageTime: '8:30 pm',
        read: true,
        send: false,
        messages: 2,
      },
      {
        username: 'aefv03',
        name: 'Abner Velásquez',
        profilePhoto: require('../../assets/FriendsChatList/pp.jpg'),
        lastMessage: 'Hola! Cómo te va?',
        lastMessageTime: '8:30 pm',
        read: true,
        send: true,
        messages: 2,
      },
      {
        username: 'tFajardo',
        name: 'Javier Fajardo',
        profilePhoto: require('../../assets/FriendsChatList/pp.jpg'),
        lastMessage: 'Vos, pasame la tarea porfa!!',
        lastMessageTime: '7:30 pm',
        read: false,
        send: true,
        messages: 2,
      },
      {
        username: 'bushini',
        name: 'Jorge Garcia',
        profilePhoto: require('../../assets/FriendsChatList/pp.jpg'),
        lastMessage: 'Hola, el viernes estás libre para jugar?',
        lastMessageTime: '7:30 am',
        read: false,
        send: true,
        messages: 0,
      },
      
    ]
  return (
    <div>
      <Card style={{ width: '45rem' }}>
      <div>
        <h3>Recents</h3>
      </div>

      <ListGroup variant="flush">
        {friends.map(friend => (
          
          <ListGroup.Item>
            <Row>
              <Col sm={3}>
                <Figure>
                  <Figure.Image
                    width={110}
                    height={90}
                    roundedCircle={true}
                    fluid={true}
                    thumbnail={true}
                    alt={'profile photo: ' + friend.username}
                    src={friend.profilePhoto}
                  />
                </Figure>

              </Col>

              <Col sm={9}>
                <Row>
                  <Col sm={10}>
                    <Card.Title>
                      {friend.name}
                    </Card.Title>
                  </Col>

                  <Col sm={2}>
                    <Card.Subtitle className="mb-2 text-muted" >
                      {friend.lastMessageTime}
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Row>
                  <Col sm={10}>
                    <Card.Text>
                      {friend.lastMessage}
                    </Card.Text>
                  </Col>
                  
                  <Col sm={2}>
                  
                  {
                    friend.send ? 
                      friend.read ? 
                        <FontAwesomeIcon icon={faCheckDouble} style={{color: 'blue'}}/>
                      :
                        <FontAwesomeIcon icon={faCheckDouble}/> 
                    : 
                      <FontAwesomeIcon icon={faCheck}/>
                  }
                  </Col>
                </Row>
              
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
        
      </ListGroup>

    </Card>
      
    </div>
  )
}

export default ChatFriendsList
