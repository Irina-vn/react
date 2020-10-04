import React from "react";
import PropTypes from "prop-types";
import { Section, Title, List, Item } from "./styles";

function Statistics({ title, stats }) {
  return (
    <>
      <Section>
        <Title>{title}</Title>

        <List>
          {stats.map((stat) => (
            <Item key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </Item>
          ))}
        </List>
      </Section>
    </>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};
export default Statistics;
