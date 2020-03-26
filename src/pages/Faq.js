import React from 'react';
import { NavLink } from 'react-router-dom';

const Faq = () => {
  return (
    <>
      <h1>Hacker News FAQ</h1>

      <section>
        <h2>Are there rules about submissions and comments?</h2>
        <p>
          <NavLink to="/guidelines">View guidelines</NavLink>
        </p>
      </section>

      <section>
        <h2>How are stories ranked?</h2>
        <p>
          The basic algorithm divides points by a power of the time since a
          story was submitted. Comments in threads are ranked the same way.
        </p>
        <p>
          Other factors affecting rank include user flags, anti-abuse software,
          software which demotes overheated discussions, and moderator
          intervention.
        </p>
      </section>

      <section>
        <h2>How is a user's karma calculated?</h2>
        <p>
          Roughly, the number of upvotes on their stories and comments minus the
          number of downvotes. These don't match up exactly; some votes are
          dropped to prevent abuse.
        </p>
      </section>

      <section>
        <h2>Why don't I see down arrows?</h2>
        <p>
          There are no down arrows on stories. They appear on comments after
          users reach a certain karma threshold, but never on direct replies.
        </p>
      </section>

      <section>
        <h2>What kind of formatting can you use in comments?</h2>
        <p>
          <NavLink to="/formatdoc">View formatting documentation</NavLink>
        </p>
      </section>

      <section>
        <h2>How do I submit a question?</h2>
        <p>
          Use the submit link in the top bar, and leave the url field blank.
        </p>
      </section>

      <section>
        <h2>How do I make a link in a question?</h2>
        <p>
          You can't. This is to prevent people from submitting a link with their
          comments in a privileged position at the top of the page. If you want
          to submit a link with comments, just submit it, then add a regular
          comment.
        </p>
      </section>

      <section>
        <h2>How do I flag a comment?</h2>
        <p>
          Click on its timestamp to go to its page, then click the 'flag' link
          at the top. There's a small karma threshold before flag links appear.
        </p>
      </section>

      <section>
        <h2>Are reposts ok?</h2>
        <p>
          If a story has had significant attention in the last year or so, we
          kill reposts as duplicates. If not, a small number of reposts is ok.
        </p>
        <p>
          Please don't delete and repost the same story. Deletion is for things
          that shouldn't have been submitted in the first place.
        </p>
      </section>

      <section>
        <h2>Are paywalls ok?</h2>
        <p>
          It's ok to post stories from sites with paywalls that have
          workarounds.
        </p>
        <p>
          In comments, it's ok to ask how to read an article and to help other
          users do so. But please don't post complaints about paywalls. Those
          are off topic.
        </p>
      </section>

      <section>
        <h2>Can I ask people to upvote my submission?</h2>
        <p>
          No. Users should vote for a story because they personally find it
          intellectually interesting, not because someone has content to
          promote.
        </p>
        <p>
          HN's software penalizes submissions, accounts, and sites that break
          this rule, so please don't.
        </p>
      </section>

      <section>
        <h2>Can I ask people to comment on my submission?</h2>
        <p>
          No, for the same reason. It's also not in your interest, because HN
          readers will figure it out, flag the thread, and use unkind words like
          'spam'.
        </p>
      </section>

      <section>
        <h2>Can I post a job ad?</h2>
        <p>Please don't post job ads as submissions to HN.</p>
        <p>
          A regular "Who Is Hiring?" thread appears on the first weekday of each
          month (or Jan 2). Most job ads are welcome there. But only an account
          called whoishiring is allowed to submit the thread itself. This
          prevents a race to post it first.
        </p>
        <p>
          Another kind of job ad is reserved for YC-funded startups. These
          appear on the front page, but are not stories: they have no vote
          arrows, points, or comments. They begin part-way down, then fall
          steadily, and only one should be on the front page at a time.
        </p>
      </section>

      <section>
        <h2>Why can't I post a comment to a thread?</h2>
        <p>
          Threads are closed to new comments after two weeks, or if the
          submission has been killed by software, moderators, or user flags.
        </p>
      </section>

      <section>
        <h2>In my profile, what does showdead do?</h2>
        <p>
          If you turn it on, you'll see all the stories and comments that have
          been killed by software, moderators, or user flags.
        </p>
        <p>
          If you see a [dead] post that shouldn't be dead, you can vouch for
          it—when enough users do this, the post is unkilled. Click on its
          timestamp to go to its page, then click 'vouch' at the top. There's a
          small karma threshold before vouch links appear.
        </p>
      </section>

      <section>
        <h2>In my profile, what is delay?</h2>
        <p>
          It gives you time to edit your comments before they appear to others.
          Set it to the number of minutes you'd like. The maximum is 10.
        </p>
      </section>

      <section>
        <h2>In my profile, what is noprocrast?</h2>
        <p>
          It's a way to help you prevent yourself from spending too much time on
          HN. If you turn it on you'll only be allowed to visit the site for
          maxvisit minutes at a time, with gaps of minaway minutes in between.
          The defaults are 20 and 180, which would let you view the site for 20
          minutes at a time, and then not allow you back in for 3 hours.
        </p>
      </section>

      <section>
        <h2>How do I submit a poll?</h2>
        <p>
          <NavLink to="/newpoll">Submit a poll</NavLink>
        </p>
      </section>

      <section>
        <h2>How do I reset my password?</h2>
        <p>
          If you have an email address in your profile, request a password reset
          here. If you haven't, email hn@ycombinator.com for help.
        </p>
      </section>

      <section>
        <h2>My IP address seems to be banned. How can I unban it?</h2>
        <p></p>
        If you request many pages too quickly, your IP address might get banned.
        The self-serve unbanning procedure works most of the time.
      </section>
    </>
  );
};

export default Faq;
