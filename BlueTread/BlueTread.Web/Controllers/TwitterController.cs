using BlueTread.Model.UI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Tweetinvi;
using Tweetinvi.Models.V2;
using Tweetinvi.Parameters.V2;

namespace BlueTread.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TwitterController : ControllerBase
    {
        private TwitterClient _twitterClient;
        private readonly TwitterOptions _options;

        public TwitterController(IOptions<TwitterOptions> options)
        {
            _options = options.Value;
            _twitterClient = new TwitterClient(
                    _options.API_KEY,
                    _options.API_KEY_SECRET,
                    _options.ACCESS_TOKEN,
                    _options.ACCESS_TOKEN_SECRET);
        }

        [HttpGet(Name = "GetTweets")]
        public async Task<List<TweetModel>> Get(string query)
        {
            try
            {
                List<TweetModel> tweets = new List<TweetModel>();
                SearchTweetsV2Response searchResponse = await _twitterClient.SearchV2.SearchTweetsAsync(new SearchTweetsV2Parameters(query)
                {
                    PageSize = 10,
                });

                foreach (var item in searchResponse.Tweets)
                {
                    TweetModel tweet = new TweetModel();
                    UserV2Response userResponse = await _twitterClient.UsersV2.GetUserByIdAsync(item.AuthorId);
                    tweet.Name = userResponse.User.Name;
                    tweet.Username = userResponse.User.Username;
                    tweet.ProfileImageURL = userResponse.User.ProfileImageUrl;
                    tweet.Text = item.Text;
                    tweet.CreatedAt = item.CreatedAt.DateTime;
                    tweets.Add(tweet);
                }
                return tweets;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
