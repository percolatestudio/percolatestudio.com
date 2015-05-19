"use strict";
var React = require("react");
var PageLayout = require("../PageLayout");

var dummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.";

var StyleguideBase = React.createClass({
  render: function() {
    return (
      <PageLayout {...this.props}>
        <header className="collage medium">
          <div className="grid-2-square">
            <h1 className="title-page">Styleguide</h1>
            <p className="description-page">A digital styleguide that contains base styles, code patterns, and formatting.</p>
          </div>
          <div className="grid-2-square bg-image-styleguide"></div>
        </header>

        <section className="section-styleguide">
          <div id="typography" className="module">
          <a name="typography"></a>
          <h5 className="subtitle">Typography</h5>
          <ul className="two-up">
            <li><h6>Typeface</h6><div className="font-m1">FF DIN</div></li>
          </ul>
          <ul className="two-up horiz">
            <li>
              <h6>Weights</h6>
              <div className="font-m1 light">300 &nbsp;&nbsp;</div>
              <div className="font-m1 regular">400 &nbsp;&nbsp;</div>
              <div className="font-m1 italic">400i &nbsp;&nbsp;</div>
              <div className="font-m1 semibold">500 &nbsp;&nbsp;</div>
              <div className="font-m1 bold">700</div>
            </li>
          </ul>
          <hr/>
          <ul className="two-up">
            <li><h6>l3 - 56/64 </h6><div className="font-l3">It's time</div></li>
            <li><h6>l2 - 48/56</h6><div className="font-l2">For the</div></li>
            <li><h6>l1 - 36/44</h6><div className="font-l1">Percolator</div></li>
            <li><h6>m3 - 28/32</h6><div className="font-m3">It's time</div></li>
            <li><h6>m2 - 24/28</h6><div className="font-m2">For the</div></li>
            <li><h6>m1 - 20/24 </h6><div className="font-m1">Percolator</div></li>
            <li><h6>s3 - 16/22</h6><div className="font-s3">Boop</div></li>
            <li><h6>s2 - 13/20</h6><div className="font-s2">Boop</div></li>
            <li><h6>s1 - 12/18</h6><div className="font-s1">Boop</div></li>
          </ul>
          <ul className="two-up">
            <br/>
            <li>
              <h6>16/22</h6>
              <div className="font-s3"><b>Body</b> {dummyText}</div>
            </li>
            <li>
              <h6>13/20</h6>
              <div className="font-s2"><b>Subtext</b> {dummyText}</div>
            </li>
            <li>
              <h6>12/18</h6>
              <div className="font-s1"><b>Fineprint</b> {dummyText}</div>
            </li>
          </ul>
        </div>

          <div id="colors" className="module">
          <a name="colors"></a>
          <h5 className="subtitle">Colors</h5>
          <ul className="two-up">
            <li className="color-primary">#5586DF</li>
            <li className="color-secondary">#000</li>
            <li className="color-tertiary">#000</li>

          </ul>
          <ul className="two-up">
            <li className="color-complementary">#EDFAFA</li>
            <li className="color-negative">#ff4800</li>
          </ul>
          <hr/>
          <ul className="two-up">
            <li className="color-empty">#FFFFFF</li>
            <li className="color-raw">#F8F8F8</li>
            <li className="color-raw-alt">#F0F0F0</li>
            <li className="color-rare">#EEEEEE</li>
            <li className="color-medium-rare">#DDDDDD</li>
            <li className="color-medium">#999999</li>
            <li className="color-medium-well">#666666</li>
            <li className="color-well">#444444</li>
            <li className="color-full">#333333</li>
          </ul>
          <ul className="two-up">
            <li className="color-facebook">#3b5998</li>
            <li className="color-google">#58586d</li>
            <li className="color-yahoo">#9238ab</li>
            <li className="color-twitter">#46c8f5</li>
            <li className="color-stumble">#e2451c</li>
            <li className="color-pinterest">#cc2127</li>
            <li className="color-youtube">#da4337</li>
          </ul>
        </div>

          <div id="buttons" className="module">
          <a name="buttons"></a>
          <h5 className="subtitle">Buttons</h5>
          <a className="btn-primary caps">Primary</a>
          <a className="btn-secondary caps">Secondary</a>
          <a className="btn-tertiary caps">Tertiary</a>
          <br/>

          <button className="btn-primary upload caps"><input type="file"/>Upload</button>
          <br/>
          <div className="btns-group">
            <a className="btn-toggle active">Active</a>
            <a className="btn-toggle">Toggle</a>
          </div>
          <div className="btns-group">
            <a className="btn-toggle active">Active</a>
            <a className="btn-toggle">Toggle</a>
            <a className="btn-toggle">Toggle</a>
          </div>
        </div>

        <div id="icons" className="module">
          <h5 className="subtitle">Icons</h5>
          <span className="icon-percolate"></span>
          <span className="icon-user"></span>
          <span className="icon-user-alt"></span>
          <span className="icon-users"></span>
          <span className="icon-user-add"></span>
          <span className="icon-home"></span>
          <span className="icon-cog"></span>
          <span className="icon-trash"></span>
          <span className="icon-edit"></span>
          <span className="icon-copy"></span>
          <span className="icon-document"></span>
          <span className="icon-add"></span>
          <span className="icon-plus"></span>
          <span className="icon-close"></span>
          <span className="icon-cross"></span>
          <span className="icon-sync"></span>
          <span className="icon-search"></span>
          <span className="icon-lock"></span>
          <span className="icon-key"></span>
          <span className="icon-check"></span>
          <span className="icon-question"></span>
          <span className="icon-alert"></span>
          <span className="icon-power"></span>
          <span className="icon-paperclip"></span>
          <span className="icon-share"></span>
          <span className="icon-reply"></span>
          <span className="icon-email"></span>
          <span className="icon-comment"></span>
          <span className="icon-rss"></span>
          <span className="icon-print"></span>
          <span className="icon-outbox"></span>
          <span className="icon-menu"></span>
          <span className="icon-timer"></span>
          <span className="icon-time"></span>
          <span className="icon-proceed"></span>
          <span className="icon-download"></span>
          <span className="icon-arrow-up"></span>
          <span className="icon-arrow-right"></span>
          <span className="icon-arrow-left"></span>
          <span className="icon-arrow-down"></span>
          <span className="icon-ellipsis"></span>
          <span className="icon-chevron-down"></span>
          <span className="icon-arrow-right-alt"></span>
          <span className="icon-arrow-left-alt"></span>
          <span className="icon-star"></span>
          <span className="icon-star-hollow"></span>
          <span className="icon-circle"></span>
          <span className="icon-circle-hollow"></span>
          <span className="icon-heart"></span>
          <span className="icon-heart-hollow"></span>
          <span className="icon-doc-list"></span>
          <span className="icon-doc-chart"></span>
          <span className="icon-shield"></span>
          <span className="icon-list-unordered"></span>
          <span className="icon-graph-line"></span>
          <span className="icon-graph-bar"></span>
          <span className="icon-structure"></span>
          <span className="icon-dashboard"></span>
          <span className="icon-box"></span>
          <span className="icon-beaker"></span>
          <span className="icon-profile"></span>
          <span className="icon-credit"></span>
          <span className="icon-book"></span>
          <span className="icon-thumbs-up"></span>
          <span className="icon-globe"></span>
          <span className="icon-face-happy"></span>
          <span className="icon-face-sad"></span>
          <span className="icon-face-neutral"></span>
          <span className="icon-pin"></span>
          <span className="icon-hourglass"></span>
          <span className="icon-flag"></span>
          <span className="icon-expand"></span>
          <span className="icon-speaker"></span>
          <span className="icon-video"></span>
          <span className="icon-play"></span>
          <span className="icon-link"></span>
          <span className="icon-camera"></span>
          <span className="icon-twitter"></span>
          <span className="icon-github"></span>
          <span className="icon-gdrive"></span>
          <span className="icon-facebook"></span>
          <span className="icon-youtube"></span>
          <span className="icon-category"></span>
          <span className="icon-admin"></span>
          <span className="icon-wrench"></span>
          <span className="icon-unlock"></span>
          <span className="icon-photo"></span>
          <span className="icon-bookmark-hollow"></span>
          <span className="icon-bookmark"></span>
          <span className="icon-info"></span>
          <span className="icon-basket"></span>
          <span className="icon-google"></span>
          <span className="icon-location"></span>
        </div>

          <div id="forms" className="module">
          <a name="forms"></a>
          <h5 className="subtitle">Forms</h5>

          <form className="two-up">
            <fieldset>
              <legend>Legend</legend>
              <input name="default-input" type="text" size="20" value="" placeholder="Standard input"/>
              <label forName="default-input3"><span className="alert">Alert Input</span></label>
              <input name="default-input3" type="text" size="20" value="" className="alert" placeholder="Invalid values"/>
              <div className="input-symbol left">
                <input type="text" placeholder="First Name"/>
                <span className="icon-percolate"></span>
              </div>
              <div className="input-symbol right">
                <input type="text" placeholder="Submit form"/>
                <span className="icon-percolate"></span>
              </div>
              <div className="input-symbol left">
                <input className="inverse" type="text" placeholder="Email"/>
                <span className="icon-email inverse"></span>
              </div>
            </fieldset>
            <fieldset>
              <textarea name="description" rows="4" cols="20" placeholder="Nostalgic futurist"></textarea>
              <span className="a-select">
                <select id="aviators" name="aviators">
                  <option value="1">Amelia Earhart</option>
                  <option value="2">Charles Lindbergh</option>
                </select>
              </span>
              <span className="a-select small">
                <select id="aviators" name="aviators" defaultValue="1">
                  <option value="1">Amelia Earhart</option>
                  <option value="2">Charles Lindbergh</option>
                </select>
              </span>
              <span className="a-select inverse">
                <select id="aviators" name="aviators" defaultValue="1">
                  <option value="1">Neil Armstrong</option>
                  <option value="2">Yuri Gagarin</option>
                  <option value="3">Buzz Aldrin</option>
                </select>
              </span>
              <span className="a-select nochrome">
                <select id="stuff" name="timerange" defaultValue="1">
                  <option value="1">Today</option>
                  <option value="2">This Week</option>
                  <option value="2">This Month</option>
                  <option value="2">This Year</option>
                </select>
              </span>
              <span className="a-select nochrome small">
                <select id="stuff" name="timerange" defaultValue="1">
                  <option value="1">Today</option>
                  <option value="2">This Week</option>
                  <option value="2">This Month</option>
                  <option value="2">This Year</option>
                </select>
              </span>
            </fieldset>
            <fieldset>
              <label className="checkbox">
                <input type="checkbox" value=""/> <span>Unchecked</span>
              </label>
              <label className="checkbox">
                <input type="checkbox" value="" defaultChecked/> <span>Checked</span>
              </label>
              <label className="checkbox empty">
                <input type="checkbox" defaultChecked/>
                <span></span>
              </label>
              <label className="radio">
                <input type="radio" name="group1" value=""/> <span>Radio</span>
              </label>
              <label className="radio">
                <input type="radio" name="group1" value=""/> <span>Radio</span>
              </label>
            </fieldset>
          </form>

          <form className="two-up">
            <fieldset>
              <legend>Misc</legend>
              <div className="fieldset-group">
                <div className="input-upload right">
                  <span className="icon-percolate" data-title="Clear"></span>
                  <span className="pseudo-input"><span> roster.csv</span></span>
                </div>
                <span className="confirm-upload"><span className="icon-check"></span> 20 teachers</span>
              </div>
              <div className="fieldset-group">
                <div className="input-upload right alert">
                  <span className="icon-percolate" data-title="Clear"></span>
                  <span className="pseudo-input"><span> roster.csv</span></span>
                </div>
              </div>
              <textarea name="body" placeholder="Enter your response"></textarea>
            </fieldset>
          </form>

        </div>

          <div id="links" className="module">
          <a name="links"></a>
          <h5 className="subtitle">Links</h5>
          <div className="links-wrapper">
            <a>Standard link</a>
            <a className="inverse">Inverse link</a>
            <a className="nochrome">Nochrome link</a>
          </div>
        </div>

          <div id="lists" className="module">
          <a name="lists"></a>
          <h5 className="subtitle">Lists</h5>
          <ul className="two-up">
            <li>
              <div className="list-horiz">
                <a>list-horiz</a>
                <a>Item 1</a>
                <a>Item 2</a>
              </div>
            </li>
            <br/>
            <li>
              <div className="list-vertical">
                <a>list-vertical</a>
                <a>Item 1</a>
                <a>Item 2</a>
                <a>Item 3</a>
                <a>Item 4</a>
              </div>
            </li>
          </ul>
        </div>

          <div id="tables" className="module">
          <a name="tables"></a>
          <h5 className="subtitle">Tables</h5>

          <table className="table-view">
            <thead>
              <TableHeading/>
            </thead>
            <tbody>
              <TableRow/>
              <TableRow/>
              <TableRow/>
              <TableRow/>
              <TableRow/>
            </tbody>
          </table>
        </div>
        </section>
      </PageLayout>
    );
  }
});

var TableHeading = React.createClass({
  render: function() {
    return (
      <tr>
        <th className="title">Table Title</th>
        <th>Heading</th>
        <th>Heading</th>
        <th>Heading</th>
      </tr>
    );
  }
});

var TableRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td><a href="#" className="name nochrome">Lorem Ipsum Dolor Sit Amet</a></td>
        <td>2.1</td>
        <td>1.3</td>
        <td>0.8</td>
      </tr>
    );
  }
});

module.exports = StyleguideBase;
