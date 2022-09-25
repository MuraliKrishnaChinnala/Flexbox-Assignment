import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <section>
        <h1>Flexbox Playground</h1>
        <p>
          The idea behind this would be to copy and paste 10 examples flexbox
          layouts.
        </p>
      </section>

      <section>
        <h2>Graph: Vertical Bars</h2>
        <div class="vertical-bars">
          <div class="vertical-bar-1"></div>
          <div class="vertical-bar-2"></div>
          <div class="vertical-bar-3"></div>
          <div class="vertical-bar-4"></div>
          <div class="vertical-bar-5"></div>
        </div>
      </section>

      <section>
        <h2>Graph: Vertical Bars with align</h2>
        <div class="vertical-bars">
          <div class="vertical-bar-1"></div>
          <div class="vertical-bar-2"></div>
          <div class="vertical-bar-3"></div>
          <div class="vertical-bar-4 align-start"></div>
          <div class="vertical-bar-5 align-center"></div>
        </div>
      </section>

      <section>
        <h2>Graph: Horizontal Bars</h2>
        <div class="horizontal-bars">
          <div class="horizontal-bar-1"></div>
          <div class="horizontal-bar-2"></div>
          <div class="horizontal-bar-3"></div>
          <div class="horizontal-bar-4"></div>
          <div class="horizontal-bar-5"></div>
        </div>
      </section>

      <section>
        <h2>Vertical Stacked (Centered)</h2>
        <div class="vertically-stacked">
          <div class="vertical-item"></div>
          <div class="vertical-item"></div>
          <div class="vertical-item"></div>
          <div class="vertical-item"></div>
          <div class="vertical-item"></div>
        </div>
      </section>

      <section>
        <h2>Basic</h2>
        <p>
          Here we have a layout that proportionately distributes spacing based on
          the amount of items within the parent div.
        </p>
        <div class="stretch-all-container">
          <div class="item" contenteditable="true">small context</div>
          <div class="item" contenteditable="true">
            larger content larger content
          </div>
          <div class="item" contenteditable="true">
            largest content larger content largest content largest content
          </div>
        </div>
      </section>

      <section>
        <h2>Basic with grow</h2>
        <p>
          Here we have a layout that proportionately distributes spacing based on
          the amount of items within the parent div.
        </p>
        <div class="stretch-all-container">
          <div class="item-with-basis" contenteditable="true">
            small context
          </div>
          <div class="item-with-basis" contenteditable="true">
            larger content larger content
          </div>
          <div class="item-with-basis" contenteditable="true">
            largest content larger content largest content largest content
          </div>
        </div>
      </section>

      <section>
        <h2>Stretch All Items Proportionately (flex grow)</h2>
        <p>
          Here we have a layout that proportionately distributes spacing based on
          the amount of items within the parent div.
        </p>
        <div class="stretch-all-container">
          <div class="item-with-basis"></div>
          <div class="item-with-basis"></div>
          <div class="item-with-basis"></div>
          <div class="item-with-basis"></div>
          <div class="item-with-basis"></div>
          <div class="item-with-basis"></div>
        </div>
      </section>

      <section>
        <h2>Stretch Middle w/ Fixed Spacing</h2>
        <p>
          Common web pattern is to create a top app bar where we want to stretch
          only the middle element, but keep the right most and left most elements
          fixed. If you want one element to stretch you can set a fixed width on
          an element that should stay static and flex-grow: 1; on the element that
          should stretch.
        </p>
        <div class="stretch-mid-container">
          <div class="stretch-mid-item"></div>
          <div class="stretch-mid-center"></div>
          <div class="stretch-mid-item"></div>
        </div>
      </section>

      <section>
        <h2>Shrink</h2>
        <p></p>
        <div class="stretch-all-container">
          <div class="stretch-item shrink-1">1</div>
          <div class="stretch-item shrink-2">2</div>
          <div class="stretch-item shrink-1">3</div>
        </div>
      </section>

      <section>
        <h2>Order</h2>
        <p></p>
        <div class="stretch-all-container">
          <div class="stretch-item order-1">shirt</div>
          <div class="stretch-item order-2">jean</div>
          <div class="stretch-item order-1">shirt</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
          <div class="stretch-item order-3">inner</div>
        </div>
      </section>

      <section>
        <h2>Alternating Grid (how order with this)</h2>
        <p>
          Set flex-wrap: wrap; on the container or else all items would be
          rendered on a single row. Justify-content to space-between on the
          container so space is created between elements and not between the edge
          of the parent element and items. Every third item's width is set to 100%
          so that it fills that entire row. We target it with the nth-child()
          selector.
        </p>
        <div class="alternating-grid">
          <div class="alternating-item">1</div>
          <div class="alternating-item">2</div>
          <div class="alternating-item width-100">3</div>
          <div class="alternating-item">4</div>
          <div class="alternating-item">5</div>
        </div>
      </section>

      <section>
        <h2>3x3 Grid</h2>
        <div class="three-by-three-grid">
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
          <div class="three-by-three-item"></div>
        </div>
      </section>

      <section>
        <h2>3x3 Grid, Constrained Proportions (1:1)</h2>
        <div class="constrained-container">
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
          <div class="constrained-item"></div>
        </div>
      </section>

      <section>
        <h2>3x3 Grid, Constrained Proportions (16:9)</h2>
        <div class="constrained-proportions">
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
          <div class="constrained-proportions-items"></div>
        </div>
      </section>

      <section>
        <h2>Masonry (or mosaic)</h2>
        <div class="masonry">
          <div class="masonry-item">1</div>
          <div class="masonry-item">2</div>
          <div class="masonry-item">3</div>
          <div class="masonry-item">4</div>
          <div class="masonry-item">5</div>
          <div class="masonry-item">6</div>
          <div class="masonry-item">7</div>
          <div class="masonry-item">8</div>
          <div class="masonry-item">9</div>
        </div>
      </section>
    </div>
  );
}

export default App;
