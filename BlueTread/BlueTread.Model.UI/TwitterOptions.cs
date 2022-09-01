using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlueTread.Model.UI
{
    public class TwitterOptions
    {
        public const string Twitter = "Twitter";
        public string API_KEY { get; set; } = String.Empty;
        public string API_KEY_SECRET { get; set; } = String.Empty;
        public string BEARER_TOKEN { get; set; } = String.Empty;
        public string ACCESS_TOKEN { get; set; } = String.Empty;
        public string ACCESS_TOKEN_SECRET { get; set; } = String.Empty;
    }
}
