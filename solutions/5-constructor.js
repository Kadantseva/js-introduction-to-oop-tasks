// BEGIN
export function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getX = function() { return this.x; };
Point.prototype.getY = function() { return this.y; };

export function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function() { return this.beginPoint; };
Segment.prototype.getEndPoint = function() { return this.endPoint; };

export function reverse(segment) {
    const begin_ = segment.getBeginPoint();
    const end_ = segment.getEndPoint();

    return new Segment(
        new Point(end_.getX(), end_.getY()),
        new Point(begin_.getX(), begin_.getY())
    );
}

export default reverse;
// END
