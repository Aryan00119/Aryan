import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { RiRobot3Fill } from 'react-icons/ri';
import Footer from '../../utills/common/Footer';
import './ChatBot.css';

const ChatBot = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMoreQuestions, setShowMoreQuestions] = useState(false);

  const faq = [
    {
      question: 'Introduction',
      answer: 'My name is Aryan Nair, and I recently completed my Bachelor\'s degree in Computer Science and Engineering from Lyallpur Khalsa College, Jalandhar. I possess strong skills in React.js, Node.js, JavaScript, Express, HTML5, CSS3, Bootstrap, and Figma. Additionally, I have experience as a Business Development Executive and proficiency in Canva.'
    },
    {
      question: 'Do you have any work experience?',
      answer: 'I have completed a six-month internship in the MERN stack at Sensation Solutions, Mohali. Additionally, I completed a six-week internship in web development at O7 Services, Jalandhar. I also possess over three months of experience in business development at Tida Sports.'
    },
    {
      question: 'How many projects have you completed?',
      answer: 'I have completed several impressive projects, including a 3D game in Python, which is a single-player first-person perspective game. Additionally, I developed a chatbot. In terms of websites, I have created a blogging platform, a gym management website, a doctor appointment system website, and a sports tech website using the MERN stack.'
    },
    {
      question: 'Can you tell me about your skills?',
      answer: '.I possess a strong skill set in web development and design, with expertise in the following technologies and tools: React.js, Node.js, JavaScript, HTML5, CSS3, Bootstrap, Express, Figma, Canva. Additionally, I have experience in business development and have worked on a variety of projects that showcase my ability to create dynamic and user-friendly web applications.'
    },
    {
      question: 'Can I contact the developer?',
      answer: '.Yes, you can contact Aryan through his LinkedIn or email provided in the contact section.'
    }
  ];

  const additionalFaq = [
    {
      question: 'What technologies are used in this portfolio?',
      answer: '.This portfolio uses React.js, Bootstrap, and CSS for styling.'
    },
    {
      question: 'How can I hire the developer?',
      answer: '.You can hire Aryan by reaching out through the Contact section or LinkedIn.'
    }
  ];

  const handleQuestionClick = (faqItem) => {
    setSelectedQuestion(faqItem.question);
    setAnswer(faqItem.answer);
    setDisplayedAnswer('');
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping) {
      let index = -1;
      const typingInterval = setInterval(() => {
        setDisplayedAnswer((prev) => prev + answer.charAt(index));
        index += 1;
        if (index === answer.length + 1) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [isTyping, answer]);

  const toggleMoreQuestions = () => {
    setShowMoreQuestions(!showMoreQuestions);
  };

  return (
    <Container className="chatbot-container">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="chat-card">
            <Card.Header>Hello! I can assist you</Card.Header>
            <Card.Body>
              {selectedQuestion ? (
                <>
                  <div className="user-question">{selectedQuestion}</div>
                  <div className="chat-bubble">{displayedAnswer}</div>
                  
                  {isTyping && (
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )}
                </>
              ) : (
                <Card.Text>Select a question to get an answer</Card.Text>
              )}
              <ListGroup variant="flush" className="mt-3">
                {faq.map((faqItem, index) => (
                  <ListGroup.Item key={index} action onClick={() => handleQuestionClick(faqItem)}>
                    <div className="user-icon">{index + 1}</div>
                    {faqItem.question}
                  </ListGroup.Item>
                ))}
                {showMoreQuestions && additionalFaq.map((faqItem, index) => (
                  <ListGroup.Item key={index + faq.length} action onClick={() => handleQuestionClick(faqItem)}>
                    <div className="user-icon">{index + faq.length + 1}</div>
                    {faqItem.question}
                  </ListGroup.Item>
                ))}
                <ListGroup.Item action onClick={toggleMoreQuestions}>
                  {showMoreQuestions ? 'Show Less Questions' : 'Show More Questions'}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ChatBot;
