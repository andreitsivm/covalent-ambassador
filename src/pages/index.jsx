import * as React from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

import Page from "Components/page";
import Container from "Components/container";
import Row, { Column } from "Components/row";
import Link from "Components/link";
import AlchemistCard from "Components/alchemist-card";
import banner from "Img/space.jpg";
import apprentice from "Img/alchemist.png";
import valiant from "Img/valiant.png";
import master from "Img/master.png";
import bg2 from "Img/bg-1.jpg";
import bg3 from "Img/bg-2.jpg";
import space from "Img/space_way.png";
import titan from "Img/titan.jpg";

import pageMeta from "./pageMeta.json";

const Index = (props) => {
  return (
    <Page {...pageMeta} {...props}>
      <Box
        bgImage={`url(${banner})`}
        bgPosition="center"
        py="150px"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundAttachment={{ base: "inherit", md: "fixed" }}
      >
        <Container>
          <Heading
            as="h1"
            variant="h1"
            color="basic.0"
            textAlign={{ base: "center", md: "left" }}
          >
            Covalent Ambassadors Program
          </Heading>
          <Text color="basic.0" textAlign={{ base: "center", md: "left" }}>
            At Covalent, we are on a mission to bring full transparency and
            visibility to assets across the entire Web3 ecosystem. We want you
            to be an extension of our team. As a Covalent Alchemist, you will
            act as a key leader in developing the Covalent ecosystem. We are
            dedicated to investing in your growth & development of all levels to
            help you succeed. Become a Covalent Alchemist Ambassador and help
            shape the data infrastructure layer of tomorrow.
          </Text>
        </Container>
      </Box>

      <Box
        py={{ base: "32px", md: "64px" }}
        bgGradient="linear-gradient(to-b,secondary.1,basic.5,)"
      >
        <Container>
          <Row>
            <Column d="flex" flexDirection="column" justifyContent="center">
              <Heading
                color="basic.0"
                variant="h1"
                textAlign={{ base: "center", md: "left" }}
              >
                Covalent Alchemist Expectations
              </Heading>
              <Text
                color="basic.0"
                pr={{ base: 0, md: "24px" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Anyone can join the Covalent community, but to become a Covalent
                Alchemist requires a bit more commitment. You are ultimately in
                control of your growth journey with Covalent. A Covalent
                Alchemist is a self-starter and autonomous team player who is
                keen to demonstrate their dedication to the project. We will
                support your growth and development by supporting you with the
                tools and coaching to succeed. Every task has a large impact,
                whether it be joining bi-weekly calls, engaging in group chats
                to update the community or team, launching campaigns, organizing
                meetups, or creating content - each Covalent Alchemist will be
                part of building the new data economy.
              </Text>
            </Column>
            <Column>
              <Image src={titan} alt="titan" />
            </Column>
          </Row>
        </Container>
      </Box>

      <Box
        bgImage={`url(${space})`}
        bgPosition="center"
        py="150px"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundAttachment={{ base: "inherit", md: "fixed" }}
      >
        <Container>
          <Heading
            variant="h2"
            color="basic.0"
            textAlign={{ base: "center", md: "left" }}
          >
            How to become be part of Covalent Alchemist program?
          </Heading>{" "}
          <Text
            color="basic.0"
            variant="subtitle"
            textAlign={{ base: "center", md: "left" }}
          >
            Each month Covalent Covalent select people who wanna join their
            Covalent Alchemist program.There are multiple ranks and many tasks where you can contribute to the project and where you can improve your skills. If you decide this what you are looking for - there are steps to maximize your chances of getting onboarded.
          </Text>
          <Text>
            <Text color="basic.0">
              1. Track announcement for onboarding in the program. Covalent has
              a huge amount of community channels, the full list is{" "}
              <Link
                isExternal
                href="https://www.notion.so/Social-Channels-Communities-e609545c8f27495087d087239be234ee"
              >
                here
              </Link>
              . Don't hesitate to ask for any info on these channels.
            </Text>{" "}
            <Text color="basic.0">
              {" "}
              2. When the date comes - find the application form on the{" "}
              <Link isExternal href="https://www.covalenthq.com/">
                official website
              </Link>
              . Generally its is available under Community - Covalent Alchemist
              program just as shown below.
            </Text>{" "}
            <Text color="basic.0">
              3. When you start applying make sure to double-check if your email
              and Telegram are correct, otherwise you won't be notified if you
              are selected.
            </Text>{" "}
            <Text color="basic.0">
              4. There are open questions in the form, i.e interest and goals,
              skill set, your portfolio. Make sure to answer each of them with
              full info that you can provide. If you have some
              video/gifs/memes/design/websites or any other work that you can
              share - put the links into portfolio section. It would highly
              increase chances because many people simply skip this step.
            </Text>{" "}
            <Text color="basic.0">
              5. After the deadline for application all chosen people would be
              notified via email or Telegram. I hope this will help you to
              become an Alchemist and be part of our big community!
            </Text>
          </Text>
        </Container>
      </Box>

      <Box
        py={{ base: "32px", md: "164px" }}
        bgImage={`url(${bg2})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundAttachment={{ base: "inherit", md: "fixed" }}
      >
        <Container px={10}>
          <Heading
            color="basic.0"
            variant="h1"
            textAlign={{ base: "center", md: "left" }}
          >
            Next Steps
          </Heading>
          <Box as="ol" color="basic.0">
            <li>Complete the registration form</li>
            <li>Your submission will be reviewed</li>
            <li>
              If your application is accepted, you will be contacted directly
            </li>
            <li>
              Become a Covalent Apprentice Alchemist & then join official
              channels
            </li>
            <li>Move up the ranks to become a Master Alchemist</li>
          </Box>
        </Container>
      </Box>

      <Box py={{ base: "32px", md: "64px" }} bg="basic.1">
        <Container>
          <Heading variant="h1" textAlign={{ base: "center", md: "left" }}>
            Alchemist Ranks
          </Heading>
          <Flex flexDirection="column">
            <AlchemistCard
              title="Apprentice Alchemist"
              image={apprentice}
              description={
                <React.Fragment>
                  <Text>
                    You'll work alongside The Council & the Alchemist OGs by
                    receiving mentorship, knowledge, skills, and smaller
                    responsibilities. This role is an excellent way of helping
                    you discover areas or specializations you'd like to grow in,
                    whether it's personal or professional. This rank provides
                    you with the opportunity to play around with different
                    procedures, strengthen current skillsets, or develop new
                    ones!
                  </Text>
                  <Text>
                    You'll soon be on your way to becoming a Valiant Alchemist
                    where you'll take on more of a leadership role, build your
                    own teams, and have the opportunity to unlock Valiant
                    procedures & rewards.
                  </Text>
                </React.Fragment>
              }
            />
            <AlchemistCard
              title="Valiant Alchemist"
              image={valiant}
              description={
                <React.Fragment>
                  <Text>
                    As Valiant Alchemist, you are now ready to take on greater
                    responsibilities. Are you ready for the challenge?
                  </Text>
                  <ul>
                    <li>Provide mentorship to Alchemists</li>
                    <li>Lead small projects & campaigns</li>
                    <li>Attend special meetings with Alchemist OGs</li>
                    <li>
                      Guide other fellow Apprentice Alchemists to expand their
                      growth & development
                    </li>
                    <li> Build your own teams of 5 people</li>
                    <li>
                      Have the access to unlocked Valiant procedures & rewards
                    </li>
                    <li>
                      Access to special channels on Discord where team leaders
                      meet{" "}
                    </li>
                  </ul>
                </React.Fragment>
              }
            />
            <AlchemistCard
              title="Master Alchemist"
              image={master}
              description={
                <React.Fragment>
                  <Text>
                    You've worked so hard, but your efforts aren't in vain! You
                    are now an independent key leader in the Covalent Alchemist
                    Ambassador community that's well respected and known for
                    your initiatives put forth. You play a key leader in a
                    region of the world and are able to:
                  </Text>
                  <ul>
                    <li>Provide mentorship to Alchemists</li>
                    <li>Lead large projects & campaigns</li>
                    <li>
                      Attend special meetings with The Council & Alchemist OGs
                    </li>
                    <li>
                      Guide other fellow Valiant and Apprentice Alchemists to
                      expand their growth & development
                    </li>
                    <li>Build your own teams of over 10 people</li>
                    <li>
                      Have the access to unlocked Master procedures & rewards
                    </li>
                    <li>
                      Access to other special features of the program, events,
                      and meetings{" "}
                    </li>
                  </ul>
                </React.Fragment>
              }
            />
          </Flex>
        </Container>
      </Box>

      <Box
        py={{ base: "32px", md: "164px" }}
        bgImage={`url(${bg3})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundAttachment="fixed"
      >
        <Container>
          <Row textAlign={{ base: "center", md: "left" }}>
            <Column>
              <Heading variant="h1" color="basic.0">
                What Next? Mission, Bounties, Guilds
              </Heading>
              <Text color="basic.0">
                We believe every procedure you execute has a large impact,
                whether it be joining bi-weekly calls, engaging in group chats,
                launching campaigns, building applications, organizing meetups,
                or creating content - each Covalent Alchemist will be part of
                building the new economy.
              </Text>
              <Text color="basic.0" textAlign={{ base: "center", md: "left" }}>
                {" "}
                Each Facility represents different procedures & bounties to
                execute in order to receive rewards that will help you advance
                to the next rank.{" "}
              </Text>
              <Link
                fontSize="24px"
                isExternal
                href="https://www.notion.so/Alchemist-Mission-Facility-3ff750849248412a89eaca3b3bcd69b4"
              >
                The Council`s Mission Facilities & Bounties
              </Link>
            </Column>
          </Row>
        </Container>
      </Box>
    </Page>
  );
};

export default Index;
