import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStories } from '../actions/story';
import StoryFilters from '../components/StoryFilters';
import StoryList from '../components/StoryList';

class Stories extends Component {
  componentDidMount() {
    this.props.fetchAllStories();
  }

  render() {
    const { loading, page, story } = this.props;

    return (
      <>
        <section>
          <StoryFilters />
          {loading.story && <p>Loading...</p>}
          <StoryList
            storyIds={story.allIds.slice(
              page.size * page.number,
              page.size * (page.number + 1),
            )}
          />
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ loading, page, story }) => ({
  loading,
  page,
  story,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllStories: () => dispatch(fetchAllStories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
