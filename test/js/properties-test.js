module("Text Descendant", {
});

test("Find text descendants in an iframe.", function() {
    // Setup fixture
    var fixture = document.getElementById('qunit-fixture');

    var iframe = document.createElement('iframe');
    var html = '<body><div id="foo">bar</div></body>';
    fixture.appendChild(iframe);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();

    var foo = iframe.contentDocument.getElementById("foo");

    equal(axs.properties.hasDirectTextDescendant(foo), true);
});

module("findTextAlternatives", {
  setup: function () {
    this.fixture_ = document.getElementById('qunit-fixture');
  }
});
test("returns the selector text for a nested object with a class attribute", function() {
  var targetNode = document.createElement('select');
  this.fixture_.appendChild(targetNode);

  try {
    equal(axs.properties.findTextAlternatives(targetNode, {}, true), "");
    return ok(true);
  } catch( e ) {
    return ok(false, "Threw exception");
  }
});

module("getTextFromDescendantContent", {
  setup: function () {
    this.fixture_ = document.getElementById('qunit-fixture');
  }
});
test("returns text from the descendants of the element", function() {
  var targetNode = document.createElement('label');
  var childNode = document.createElement('input');
  childNode.setAttribute('type', 'radio');
  childNode.setAttribute('id', 'reason_Screenshot');
  childNode.setAttribute('name', 'reason');
  childNode.setAttribute('value', 'Screenshot');
  targetNode.appendChild(childNode);
  this.fixture_.appendChild(targetNode);

  try {
    equal(axs.properties.getTextFromDescendantContent(targetNode), "");
    return ok(true);
  } catch( e ) {
    return ok(false, "Threw exception: " + e);
  }
});
