 // Larnelle Letts
 
function check_to_start()
{
	$('#lookup').click(function()
	{
		$('#result').html('');
		var country_entry = $('#country').val();
		var all = $('#all').is(":checked");
		
		if (all == true)
		{
			$.get('world.php?all=true',function(data)
			{
				$('#result').html(data);
			});
			
			else
			{
				$.get('world.php?country=' + country_entry,function (data)
				{
					$('#result').html(data);
				});
			}
		}
		
	}
}



$ (document).ready(check_to_start);