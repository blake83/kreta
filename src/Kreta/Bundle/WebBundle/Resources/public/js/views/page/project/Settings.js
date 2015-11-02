/*
 * This file is part of the Kreta package.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import '../../../../scss/views/page/project/_settings.scss';

import React from 'react';

import UserPreview from '../../component/UserPreview';
import Button from '../../component/Button.js';
import ContentMiddleLayout from '../../layout/ContentMiddleLayout.js';
import ContentRightLayout from '../../layout/ContentRightLayout.js';
import SettingsParticipants from './SettingsParticipants.js';
import ProjectEdit from './Edit.js';


export default React.createClass({
  getInitialState() {
    return {
      project: null,
      userSelectorVisible: false
    };
  },
  componentDidMount() {
    const project = App.collection.project.get(this.props.params.projectId);
    project.on('change', (project) => {
      this.setState({project});
    });
    this.setState({project});
  },
  showNotParticipantingList(ev) {
    ev.preventDefault();
    this.setState({userSelectorVisible: true});
  },
  updateParticipants() {
    this.state.project.fetch();
  },
  render() {
    if (!this.state.project) {
      return <div>Loading...</div>;
    }

    const participants = this.state.project.get('participants').map((participant, index) => {
      return <UserPreview key={index} user={participant.user}/>;
    });

    return (
      <div>
        <ContentMiddleLayout>
          <ProjectEdit project={this.state.project}/>
          <section className="spacer-vertical-1">
            <div className="section-header">
              <h3 className="section-header-title">
                <strong>People</strong>
              in this project
              </h3>
              <div className="section-header-actions">
                <Button color="green"
                  onClick={this.showNotParticipantingList}>
                  Add people
                </Button>
              </div>
            </div>
            <div className="project-settings__participants">
              {participants}
            </div>
          </section>
        </ContentMiddleLayout>
        <ContentRightLayout open={this.state.userSelectorVisible}>
          <SettingsParticipants
            onParticipantAdded={this.updateParticipants}
            project={this.state.project}
          />
        </ContentRightLayout>
      </div>
    );
  }
});