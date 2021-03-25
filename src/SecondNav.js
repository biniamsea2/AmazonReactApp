import React from "react";
import "./SecondNav.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

const SecondNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="All" id="basic-nav-dropdown">
            <p className="categories">Trending</p>
            <NavDropdown.Item href="#action/3.1">
              Best Sellers{" "}
              <ArrowForwardIos className="ArrowForwardIos" fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              New Releases{" "}
              <ArrowForwardIos className="ArrowForwardIos" fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Movers & Shakers{" "}
              <ArrowForwardIos className="ArrowForwardIos" fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <p className="categories">Digital Content & Devices</p>
            <NavDropdown.Item href="#action/3.2">
              Prime Video{" "}
              <ArrowForwardIos className="ArrowForwardIos" fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Amazon Music{" "}
              <ArrowForwardIos className="ArrowForwardIos" fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Echo & Alexa{" "}
              <ArrowForwardIos className="ArrowForwardIos" fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Fire Tablets <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Fire Tv <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Kindle E-readers & Books <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Audible Books & Originals <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Appstore for Android <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <p className="categories">Shop By Department</p>
            <NavDropdown.Item href="#action/3.2">
            Clothing, Shoes, Jewelry & Watches <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Amazon Fresh <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Books <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Movies, Music & Games <ArrowForwardIos fontSize="small" />
            </NavDropdown.Item>














          </NavDropdown>

          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers_22595f4f23134e4aa687cca616dd2701"
          >
            Best Sellers
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb_8b76f3deb4464058af8eb975e65f885d"
          >
            Today's Deals
          </Nav.Link>

          <NavDropdown title="Prime" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="https://www.amazon.com/amazonprime?ref=acq_slash_prime&ms3_c=f8050ccde7dc8667cd42d4d30c082601"
            >
              Prime
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.amazon.com/b?node=15247183011&ref=acq_slash_prime&ms3_c=de1a873798b2a3dedb5d0ecce8baeed6"
            >
              Delivery
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.amazon.com/b?ie=UTF8&node=16205654011&ref=acq_slash_prime&ms3_c=757416cd91e351157d5945c4e962d153"
            >
              Exclusive Deals
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.amazon.com/primeinsider?ref=acq_slash_prime&ms3_c=757416cd91e351157d5945c4e962d153"
            >
              Prime In
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.amazon.com/gp/help/customer/display.html?ref=acq_slash_prime&ms3_c=757416cd91e351157d5945c4e962d153"
            >
              Get Help
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice_74bebff5eab64735882e87c98f865eb7"
          >
            Customer Service
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/gp/new-releases/?ref_=nav_cs_newreleases_524cc40c03954987aed60c546996105e"
          >
            New Releases
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/books-used-books-textbooks/b/?ie=UTF8&node=283155&ref_=nav_cs_books_788dc1d04dfe44a2b3249e7a7c245230"
          >
            Books
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/amazon-fashion/b/?ie=UTF8&node=7141123011&ref_=nav_cs_fashion_dd35c91e68cd43a889bbbb227e6295b8"
          >
            Fashion
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/Kindle-eBooks/b/?ie=UTF8&node=154606011&ref_=nav_cs_kindle_books_6395eddc526040139c7ee602774c5efd"
          >
            Kindle
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc_48b1fd0bb4a14f06a105c7a095311e83"
          >
            Gifts
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/toys/b/?ie=UTF8&node=165793011&ref_=nav_cs_toys_7ae6208bf21c4a59b9006b1891f7d18a"
          >
            Toys
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/home-garden-kitchen-furniture-bedding/b/?ie=UTF8&node=1055398&ref_=nav_cs_home_79f3fa5ce5d64264879d22257c8fffd0"
          >
            Amazon Home
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/gcx/Gifts-for-Everyone/gfhz/?ref_=nav_cs_giftfinder_797116a77f3e41e9b8bf175add187a06"
          >
            Find Gifts
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="https://www.amazon.com/gcx/Easter-Gift-Shop/gfhz/events/?_encoding=UTF8&categoryId=easter-store&ref_=nav_swm_EASTER21_SWM1&pf_rd_p=435796e1-a89f-4517-9155-ad86f8bb77be&pf_rd_s=nav-sitewide-msg-text&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=G1XEQXMEN65NB247DF33"
          >
            Shop Easter
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SecondNav;
