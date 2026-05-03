// BEGIN
const getMutualFriends = (user1, user2) => {
      const friend_1 = new Set(user1.getFriends().map(f => f.id));
      const mutFriends = user2.getFriends().filter(f => friend_1.has(f.id));
      return mutFriends;
};
export {getMutualFriends};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});